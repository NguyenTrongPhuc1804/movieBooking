import React, { useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { upload } from "@testing-library/user-event/dist/upload";
import {
  editFilm,
  uploadFilm,
} from "../../../redux/reducer/ManagementFilmSlice";
import { groupId } from "../../../util/setting/config";
import { useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function EditFilm() {
  const dispatch = useDispatch();
  const { filmEdit } = useSelector((state) => state.ManagementFilmSlice);
  let { id } = useParams();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenPhim: filmEdit.tenPhim,
      trailer: filmEdit.trailer,
      moTa: filmEdit.moTa,
      ngayKhoiChieu: filmEdit.ngayKhoiChieu,
      dangChieu: filmEdit.dangChieu,
      sapChieu: filmEdit.sapChieu,
      hot: filmEdit.hot,
      danhGia: filmEdit.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(uploadFilm(formData));
    },
  });
  const dateFormat = "DD/MM/YYYY";
  console.log("nkc1", formik.values);

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeUpload = (e) => {
    let file = e.target.files[0];
    formik.setFieldValue("hinhAnh", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      console.log("asd", e.target.result);
      setImgSrc(e.target.result);
    };
  };
  useEffect(() => {
    dispatch(editFilm(id));
  }, []);
  return (
    <>
      <h1 className="text-2xl text-center font-bold my-4">Edit Phim</h1>
      <Form
        className="w-full mx-auto"
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tên Phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu">
          <DatePicker
            format={"DD-MM-YYYY"}
            name="ngayKhoiChieu"
            id="ngayKhoiChieu"
            onChange={(e) => {
              let ngayKhoiChieu = moment(e).format("DD-MM-YYYY");
              formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
            }}
            defaultValue={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            className=""
            checked={formik.values.dangChieu}
            onChange={handleChangeSwitch("dangChieu")}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            className=""
            checked={formik.values.sapChieu}
            onChange={handleChangeSwitch("sapChieu")}
          />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            className=""
            checked={formik.values.hot}
            onChange={handleChangeSwitch("hot")}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeNumber("soSao")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        {/* <Form.Item label="Hình ảnh">
          <input type="file"></input>
        </Form.Item> */}
        <Form.Item label="Hình ảnh" valuePropName="fileList">
          <input
            accept="image/png, image/jpeg"
            type="file"
            name="hinhAnh"
            onChange={handleChangeUpload}
          />
          <img
            className="w-52 h-52 mt-2"
            src={imgSrc === "" ? filmEdit.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>
        <div className="text-center w-full">
          <button
            type="submit"
            className="bg-blue-500  text-white py-2 px-4 mt-8 hover:scale-110 transition-all rounded-md"
          >
            Lưu
          </button>
        </div>
      </Form>
    </>
  );
}

export default EditFilm;
