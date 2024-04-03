import './menu.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import foodApi from '../../api/foodApi';
function Menu() {
  // const navigate = useNavigate();
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [food, setFood] = useState(null);
  useEffect(() => {
    foodApi.getAll().then((data) => setFood(data));
  }, []);
  // eslint-disable-line react-hooks/exhaustive-deps
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const nameBody = (rowData) => {
    return (
      <div className="team-datatable-name">
        <Avatar
          image={`http://localhost:3001/uploads/${rowData?.image}`}
          size="large"
          shape="circle"
          className="team-datatable-name-img"
          label="Profile Avatar"
        />
        <div className="team-datatable-name-text">
          <p>
            <b>{rowData?.name}</b>
          </p>
          <p className="team-datatable-name-email">{rowData?.email}</p>
        </div>
      </div>
    );
  };

  const actionBody = (rowData) => {
    return (
      <div className="team-datatable-action">
        <Button
          type="button"
          label="Edit"
          raised
          // onClick={() => onClickEdit(rowData)}
        ></Button>
        <Button label="Delete" severity="danger" raised />
      </div>
    );
  };
  const onClickAdd = () => {
    console.log(food);
  };
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Team Datatable</span>
      <div className=" flex flex-wrap align-items-center justify-content-between gap-5">
        <Button label="Add" onClick={() => onClickAdd()} />

        <span className="p-input-icon-left">
          <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <DataTable
        header={header}
        dataKey="_id"
        filters={filters}
        removableSort
        value={food}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        globalFilterFields={['_id', 'name']}
        emptyMessage="No members found."
        selectionMode="single"
        className="team-datatable"
        // onRowSelect={onRowSelect}
      >
        <Column
          field="_id"
          header="ID"
          // filter
          sortable
          className="id"
        />
        <Column field="name" body={nameBody} header="Name" sortable sortField="name" className="name" />
        <Column field="action" header="Action" className="action" body={(data) => actionBody(data)} />
      </DataTable>
      {/* <div className="card">
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column field="price" header="Price"></Column>
        </DataTable>
      </div> */}
    </div>
  );
}

export default Menu;
