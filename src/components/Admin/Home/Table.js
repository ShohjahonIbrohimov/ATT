import React, { useState, useEffect } from "react";
import GTable from "../../Reusable/GTable";
import GModal from "../../Reusable/GModal";
import GForm from "../../Reusable/GForm";
import columns from "./columns.json";
import productColumns from "./productColumns.json";
import fields from "./formFields.json";
import { Button, Space, Radio } from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { get, create, deleteCat, update } from "../../../redux/category/thunks";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const [visible, setvisible] = useState(false);
  const [defaults, setdefaults] = useState(null);
  const [isCategory, setisCategory] = useState(true);
  const [type, settype] = useState("product");
  const [subCategory, setsubCategory] = useState(null);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.category);
  const products = useSelector((state) => state.categoryReducer.product);
  const subcategories = useSelector(
    (state) => state.categoryReducer.subcategory
  );

  const fields2 = [
    {
      name: "cat_id",
      placeHolder: "Select category",
      type: "select",
      options: categories.map((c) => ({ value: c?._id, label: c?.title?.uz })),
    },
    { name: "uz", placeHolder: "Name in uzbek" },
    { name: "ru", placeHolder: "Name in russian" },
  ];

  const productForm = [
    { name: "uz", placeHolder: "Name in uzbek" },
    { name: "ru", placeHolder: "Name in russian" },
    { name: "price", placeHolder: "Price" },
    { name: "descUz", placeHolder: "Description in Uzbek" },
    { name: "descRu", placeHolder: "Description in Russian" },
    { name: "img", placeHolder: "Product Image", type: "image" },
    { name: "video", placeHolder: "Product Video", type: "video" },
  ];

  const handleAddCategory = (data) => {
    console.log(type);
    dispatch(create({ vals: data, type }));
  };

  const handleUpdateCategory = (data) => {
    dispatch(
      update({
        vals: data,
        id: defaults.data._id,
        index: defaults.index,
        type,
      })
    );
  };

  const handleDeleteCategory = (data) => {
    dispatch(deleteCat({ id: data, type }));
  };

  const handleOpenModalSub = () => {
    setdefaults(null);
    setvisible(true);
    setisCategory(false);
    settype("subcategory");
  };

  const handleOpenModal = () => {
    setdefaults(null);
    setvisible(true);
    setisCategory(true);
    settype("category");
  };

  const handleSubCategory = (data) => {
    setsubCategory(data);
    settype("exactSubcategory");
  };

  const handleProductOpen = (data) => {
    setvisible(true);
    settype("product");
    setdefaults(null);
  };

  useEffect(() => {
    dispatch(get("category"));
    dispatch(get("subcategory"));
    dispatch(get("product"));
  }, []);

  return (
    <div>
      <GModal visible={visible} setvisible={setvisible}>
        {isCategory && type !== "product" && (
          <GForm
            defaults={defaults}
            handleAddCategory={handleAddCategory}
            handleUpdateCategory={handleUpdateCategory}
            fields={fields}
          />
        )}
        {!isCategory && type !== "product" && (
          <GForm
            defaults={defaults}
            handleAddCategory={handleAddCategory}
            handleUpdateCategory={handleUpdateCategory}
            fields={fields2}
          />
        )}
        {type === "product" && (
          <GForm
            defaults={defaults}
            handleAddCategory={handleAddCategory}
            handleUpdateCategory={handleUpdateCategory}
            fields={productForm}
          />
        )}
      </GModal>
      <Space style={{ marginBottom: "1rem" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleOpenModal}
        >
          Add
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleOpenModalSub}
        >
          Add SubCategory
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleProductOpen}
        >
          Add Product
        </Button>
        <Radio.Group
          options={[
            { value: "category", label: "Categories" },
            { value: "product", label: "Products" },
            { value: "subcategory", label: "Subcategories" },
          ]}
          onChange={(e) => {
            settype(e.target.value);
          }}
          value={type}
          optionType="button"
        />
        {type === "exactSubcategory" && (
          <Button
            type="primary"
            icon={<ArrowLeftOutlined />}
            onClick={() => settype("category")}
          ></Button>
        )}
      </Space>

      <GTable
        setdefaults={setdefaults}
        setvisible={setvisible}
        handleDeleteCategory={handleDeleteCategory}
        handleSubCategory={handleSubCategory}
        columns={type === "product" ? productColumns : columns}
        subCategory={subCategory}
        data={
          type === "exactSubcategory"
            ? subcategories.filter((c) => c.cat_id === subCategory._id)
            : type === "subcategory"
            ? subcategories
            : type === "product"
            ? products
            : categories
        }
        type={type}
      />
    </div>
  );
};

export default Table;
