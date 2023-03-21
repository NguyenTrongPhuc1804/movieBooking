import React from "react";
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
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function AddNew() {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

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
  return (
    <>
      <Form
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
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            name="ngayKhoiChieu"
            onChange={(e) => {
              let ngayKhoiChieu = moment(e.$d).format("DD/MM/YYYY");
              formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
            }}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch className="" onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch className="" onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch className="" onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeNumber("soSao")}
            min={1}
            max={10}
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
          <img className="w-52 h-52 mt-2" src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="">
          <Button htmlType="submit" className="bg-blue-500 text-white">
            Thêm phim
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddNew;
