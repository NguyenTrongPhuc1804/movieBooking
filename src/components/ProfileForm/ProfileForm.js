import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { groupId, USER_INFO } from "../../util/setting/config";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfoUserUpdate,
  updateUser,
} from "../../redux/reducer/ManagementUserSlice";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
function ProfileForm(props) {
  const dispatch = useDispatch();
  let { infoUserUpdate } = props;
  const { maLoaiNguoiDung } = JSON.parse(localStorage.getItem(USER_INFO));
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: infoUserUpdate.email,
      hoTen: infoUserUpdate.hoTen,
      maLoaiNguoiDung: maLoaiNguoiDung,
      maNhom: infoUserUpdate.maNhom,
      matKhau: infoUserUpdate.matKhau,
      soDt: infoUserUpdate.soDT,
      taiKhoan: infoUserUpdate.taiKhoan,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc"),
      hoTen: Yup.string().required("Họ tên là bắt buộc"),
      soDt: Yup.number().integer().required("Số điện thoại là bắt buộc"),
      taiKhoan: Yup.string().required("Tài khoản là bắt buộc"),
      matKhau: Yup.string().required("Mật khẩu là bắt buộc"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateUser(values));
    },
  });
  useEffect(() => {
    dispatch(getInfoUserUpdate());
  }, []);
  return (
    <>
      <p className="text-4xl font-bold text-center mb-6 text-black">
        Chỉnh sửa thông tin tài khoản
      </p>
      <Form
        size="large"
        className="mx-auto"
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
        layout="horizontal"
      >
        {" "}
        <div className=" flex-wrap sm:flex   justify-center">
          <div className="">
            <Form.Item label="Email">
              <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                id="email"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-600">{formik.errors.email}</p>
              )}
            </Form.Item>{" "}
            <Form.Item label="Họ tên">
              <Input
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                name="hoTen"
              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className="text-red-600">{formik.errors.hoTen}</p>
              )}
            </Form.Item>{" "}
            <Form.Item label="Số điện thoại">
              <Input
                value={formik.values.soDt}
                onChange={formik.handleChange}
                name="soDt"
              />
              {formik.errors.soDt && formik.touched.soDt && (
                <p className="text-red-600">{formik.errors.soDt}</p>
              )}
            </Form.Item>
          </div>
          <div className="">
            <Form.Item label="Tài khoản ">
              <Input
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                name="taiKhoan"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className="text-red-600">{formik.errors.taiKhoan}</p>
              )}
            </Form.Item>

            <Form.Item label="Mật khẩu">
              <Input.Password
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                name="matKhau"
              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-600">{formik.errors.matKhau}</p>
              )}
            </Form.Item>
          </div>
        </div>
        <Form.Item className="mx-auto w-full flex justify-center">
          <Button type="primary" className="bg-blue-500 " htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ProfileForm;
