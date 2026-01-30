// src/pages/dashboard/AdminAddProduct.jsx
import { div } from "framer-motion/client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AdminAddProduct() {
  const { t } = useTranslation();

  const [product, setProduct] = useState({
    name:"",
    price:"",
    stock:"",
    category:"",
    image:null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e)=>{
    const {name, value, files} = e.target;
    if(name === "image" && files[0] ){
        setProduct({
            ...product, image: files[0]
        })
        setPreview(URL.createObjectURL(files[0]));
    }else{
        setProduct({...product, [name]: value});
    }
  }

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      <h1 className="text-2xl font-bold text-[var(--primary)] mb-6">
        {t("adminAddProduct.title")}
      </h1>

      <form className="bg-[var(--cardColor)] p-6 rounded-2xl shadow max-w-lg mx-auto space-y-4">
        {/* Name */}
        <label className="block">
          <span className="font-semibold">{t("adminAddProduct.productName")}</span>
          <input
            type="text"
            name="name"
            placeholder={t("adminAddProduct.productName")}
            className="w-full mt-1 p-2 rounded border border-gray-300 bg-[var(--cardColor)] text-[var(--blackColor)]"
          />
        </label>

        {/* Price */}
        <label className="block">
          <span className="font-semibold">{t("adminAddProduct.price")}</span>
          <input
            type="number"
            name="price"
            placeholder="0.00"
            className="w-full mt-1 p-2 rounded border border-gray-300 bg-[var(--cardColor)] text-[var(--blackColor)]"
          />
        </label>

        {/* Stock */}
        <label className="block">
          <span className="font-semibold">{t("adminAddProduct.stock")}</span>
          <input
            type="number"
            name="stock"
            placeholder="0"
            className="w-full mt-1 p-2 rounded border border-gray-300 bg-[var(--cardColor)] text-[var(--blackColor)]"
          />
        </label>

        {/* Category */}
        <label className="block">
          <span className="font-semibold">{t("adminAddProduct.category")}</span>
          <select
            name="category"
            className="w-full mt-1 p-2 rounded border border-gray-300 bg-[var(--cardColor)] text-[var(--blackColor)]"
          >
            <option value="">{t("adminAddProduct.selectCategory")}</option>
            <option value="driedFruits">{t("adminAddProduct.categories.driedFruits")}</option>
            <option value="preservedProduce">{t("adminAddProduct.categories.preservedProduce")}</option>
            <option value="amlou">{t("adminAddProduct.categories.amlou")}</option>
          </select>
        </label>

        {/* Image Upload */}
        <label className="block">
          <span className="font-semibold">{t("adminAddProduct.image")}</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full mt-1 p-2 rounded border border-gray-300 bg-[var(--cardColor)] text-[var(--blackColor)]"
            onChange={handleChange}
          />
        </label>

        {preview && (
            <div className="mb-4">
            <span className="font-semibold">{t("adminAddProduct.preview")}:</span>
            <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-lg border" />
            </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
        >
          {t("adminAddProduct.addProduct")}
        </button>
      </form>
    </div>
  );
}
