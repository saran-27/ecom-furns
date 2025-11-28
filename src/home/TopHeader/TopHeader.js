import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function TopHeader() {
  return (
    <div className='container mt-3 Top-header'>
      <div className='row Top-section'>
        <div className='Top-left col-md-4'>
          <h4>Furns</h4>
        </div>

        <div className='top-right col-md-8'>
          <ul className='d-flex justify-content-end'>
            <li><i className="fa fa-search"></i></li>
            <li><i className="fa fa-user-o"></i></li>
            <li><i className="fa fa-shopping-cart"></i></li>

            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="outline-danger"
                >
                  Indian (USD $)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Kenya (USD $)</Dropdown.Item>
                  <Dropdown.Item>Montenegro (USD $)</Dropdown.Item>
                  <Dropdown.Item>Hong Kong SAR (USD $)</Dropdown.Item>
                  <Dropdown.Item>Iceland (USD $)</Dropdown.Item>
                  <Dropdown.Item>Indonesia (USD $)</Dropdown.Item>
                  <Dropdown.Item>Libya (USD $)</Dropdown.Item>
                  <Dropdown.Item>Morocco (USD $)</Dropdown.Item>
                  <Dropdown.Item>Spain (USD $)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopHeader;
