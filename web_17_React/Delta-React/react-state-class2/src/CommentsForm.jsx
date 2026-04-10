import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
   if (!values.remark) {
     errors.remark = 'Required';
   } else if (values.remark.length > 20) {
     errors.remark = 'Must be 20 characters or less';
   }

    if (!values.rating)
    {
        errors.rating = 'Required';
    }
 
   return errors;
 };


export default function CommentsForm({ addNewComment }) {

  const formik = useFormik({
      initialValues: {
         username: '',
         remark: '',
         rating: 5,
      },
      validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
 


  return (
    <div>
      <h2>Give Comments</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Enter Username"
          value={formik.values.username}
          onChange={formik.handleChange}
              />
              {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}
        <br />
        <br />
        <br />

        <label htmlFor="remark">Remark: </label>
        <textarea
          name="remark"
          id="remark"
          value={formik.values.remark}
          placeholder="Add a few remarks"
          onChange={formik.handleChange}
              />
                {formik.errors.remark ? <div style={{color:'red'}}>{formik.errors.remark}</div> : null}
        <br />
        <br />
        <br />

        <label htmlFor="rating">Rating: </label>
        <input
          name="rating"
          id="rating"
          type="number"
          placeholder="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
              />
                {formik.errors.rating ? <div style={{color:'red'}}>{formik.errors.rating}</div> : null}
        <br />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
