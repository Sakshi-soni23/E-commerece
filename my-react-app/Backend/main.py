import streamlit as st
import plotly.express as px
import pandas as pd
import os
import warnings
warnings.filterwarnings("ignore")

st.set_page_config(page_title="Jewellery Store Dashboard",
                   page_icon=":bar_chart:",
                   layout="wide")

st.title(":bar_chart: Jewellery Store Dashboard")
st.markdown("<style> div.block-container{padding-top:2rem} </style>", unsafe_allow_html=True)

# Upload File Section
fl = st.file_uploader(":file_folder: Upload a file",
                      type=(["csv", "txt", "xlsx", "xls"]))

if fl is not None:
    filename = fl.name
    st.write(filename)
    df = pd.read_excel(fl)

else:
    os.chdir(r"C:\\Users\\Dell\\Desktop\\E-commerece\\my-react-app\\Backend")
    df = pd.read_excel("Jewllery.xlsx")


# ================= Sidebar Filters =================
st.sidebar.header("Please choose filters:")

region = st.sidebar.multiselect(
    "Pick Region:",
    options=df["Region"].unique()
)

if not region:
    df2 = df.copy()
else:
    df2 = df[df["Region"].isin(region)]

state = st.sidebar.multiselect(
    "Pick State:",
    options=df2["State"].unique()
)

if not state:
    df3 = df2.copy()
else:
    df3 = df2[df2["State"].isin(state)]

city = st.sidebar.multiselect(
    "Pick City:",
    options=df3["City"].unique()
)

if not city:
    filtered_df = df3.copy()
else:
    filtered_df = df3[df3["City"].isin(city)]


# ================= Charts =================
col1, col2 = st.columns((2))

# -------- Category Wise Sales ----------
category_df = filtered_df.groupby(by=["Category"], as_index=False)["Price (INR)"].sum()

with col1:
    st.subheader("Category Wise Revenue")
    fig = px.bar(
        category_df,
        x="Category",
        y="Price (INR)",
        text=['₹{:,.2f}'.format(x) for x in category_df["Price (INR)"]],
        template="seaborn"
    )
    fig.update_layout(height=300)
    st.plotly_chart(fig, use_container_width=True,
                    config={"displaylogo": False})


# -------- Region Wise Sales ----------
with col2:
    st.subheader("Region Wise Revenue")
    fig = px.pie(
        filtered_df,
        values="Price (INR)",
        names="Region",
        hole=0.5
    )

    fig.update_traces(textinfo="label+percent",
                      textposition="outside")

    st.plotly_chart(
        fig,
        use_container_width=True,
        config={"displaylogo": False}
    )

cl1, cl2 = st.columns(2)

cl1, cl2 = st.columns(2)

# ---------- CATEGORY SECTION ----------
with cl1:
    with st.expander("📂 Category - View Data", expanded=True):

        # Safety: handle missing values
        category_df = category_df.fillna(0)

        # Optional: Sort by Price if column exists
        if "Price (INR)" in category_df.columns:
            category_df = category_df.sort_values(by="Price (INR)", ascending=False)

        styled_cat = category_df.style.format({"Price (INR)": "₹{:,.2f}".format}).background_gradient(cmap="Blues")

        st.write(styled_cat)

        csv = category_df.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="⬇️ Download Category Data",
            data=csv,
            file_name="Category.csv",
            mime="text/csv",
            help="Download category level dataset as CSV"
        )


# ---------- REGION SECTION ----------
with cl2:
    with st.expander("🌍 Region - View Data", expanded=True):

        region = (
            filtered_df.groupby("Region", as_index=False)["Price (INR)"]
            .sum()
            .sort_values(by="Price (INR)", ascending=False)
        )

        styled_region = region.style.format({"Price (INR)": "₹{:,.2f}".format}).background_gradient(cmap="Oranges")

        st.write(styled_region)

        csv = region.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="⬇️ Download Region Data",
            data=csv,
            file_name="Region.csv",
            mime="text/csv",
            help="Download region level dataset as CSV"
        )

# ========== TREEMAP ==========
st.subheader("Hierarchical Revenue View (Region → State → Category)")

fig3 = px.treemap(
    filtered_df,
    path=["Region", "State", "Category"],
    values="Price (INR)",
    hover_data=["Price (INR)"],
    color="Category"
)

fig3.update_layout(height=650)
st.plotly_chart(fig3, use_container_width=True)


# ========== PIE CHARTS ==========
chart1, chart2 = st.columns((2))

with chart1:
    st.subheader("Region Wise Revenue")
    fig = px.pie(
        filtered_df,
        values="Price (INR)",
        names="Region",
        template="plotly_dark",
        hole=0.4
    )
    st.plotly_chart(fig, use_container_width=True)

with chart2:
    st.subheader("Category Wise Revenue")
    fig = px.pie(
        filtered_df,
        values="Price (INR)",
        names="Category",
        template="gridon",
        hole=0.4
    )
    st.plotly_chart(fig, use_container_width=True)


# ========== SUMMARY TABLE ==========
import plotly.figure_factory as ff

st.subheader(":point_right: Sample Jewellery Summary Table")

with st.expander("Summary_Table"):

    df_sample = filtered_df[
        ["Region", "State", "City", "Category", "Price (INR)", "Stock Quantity", "Rating"]
    ].head(10)

    fig = ff.create_table(df_sample)
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("Region wise Category Revenue Table")

    region_category_table = pd.pivot_table(
        filtered_df,
        values="Price (INR)",
        index=["Region"],
        columns="Category",
        aggfunc="sum"
    )

    st.write(region_category_table.style.background_gradient(cmap="Blues"))


# ========== SCATTER PLOT ==========
st.subheader("Relationship Between Price and Rating")

data1 = px.scatter(
    filtered_df,
    x="Price (INR)",
    y="Rating",
    size="Stock Quantity",
    hover_name="Product Name"
)

data1.update_layout(
    title="Price vs Rating Scatter Plot",
    xaxis_title="Price (INR)",
    yaxis_title="Rating"
)

st.plotly_chart(data1, use_container_width=True)


# ========== DATA VIEW ==========
with st.expander("View Jewellery Data"):
    st.write(filtered_df.iloc[:500].style.background_gradient(cmap="Oranges"))


# ========== DOWNLOAD ORIGINAL DATA ==========
csv = df.to_csv(index=False).encode("utf-8")

st.download_button(
    "Download Full Dataset",
    data=csv,
    file_name="Jewellery_Data.csv",
    mime="text/csv"
)
