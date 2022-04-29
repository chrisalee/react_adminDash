import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Datatable = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell__action">
            <Link to='/users/:id' style={{textDecoration: "none"}}>
              <div className="view__button">View</div>
            </Link>
            <div className="delete__button" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable__title">
        All Users
        <Link to='/users/new' style={{textDecoration: "none"}} className='datatable__link'>
          Add User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
