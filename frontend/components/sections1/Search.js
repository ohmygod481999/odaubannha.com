import { useRouter } from "next/router";
import React, { useState } from "react";

function Search() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const _handleChange = (e) => setValue(e.target.value);
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return
    window.location.href = `/projects?title=${value}`
  };
  return (
    <div className="header-src-fild bg-secondary py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <form
              className="adbanced-form-one amenities-list pt-15 news-letter"
              onSubmit={_handleSubmit}
            >
              <div className="row">
                <div className="form-group  position-relative col-lg-8 col-md-8 mx-auto">
                  <input
                    className="form-control mt-sm-15"
                    type="text"
                    name="address"
                    placeholder="Tìm kiếm dự án"
                    value={value}
                    onChange={_handleChange}
                  />
                  <button type="submit" className="bg-gray color-secondary">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
