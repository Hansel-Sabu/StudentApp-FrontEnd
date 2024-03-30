import React from 'react'
import StudentHeader from './StudentHeader'

const SearchStudent = () => {
    return (
        <div>
            <StudentHeader/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Admission No</label>
                        <input type="text" className="form-control" />
                        <br />
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SearchStudent