'use client';
import { formatImage } from '@/utils/getImageByUrl';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid';
import axios from 'axios';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import UserImageModal from './UserImageModal';

const defaultFilterModel = {
  items: [],
  logicOperator: 'and',
  quickFilterLogicOperator: 'and',
  quickFilterValues: [],
};
const CustomToolBar = () => (
  <GridToolbarContainer>
    <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
  </GridToolbarContainer>
);
export default function UsersTable() {
  const [sortModel, setSortModel] = useLocalStorage('sortModel', []);
  const [filterModel, setFilterModel] = useLocalStorage(
    'filterModel',
    defaultFilterModel
  );
  const [modalData, setModalData] = useState({
    isOpen: false,
    data: null,
  });
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      field: 'image',
      headerName: 'Photo',
      width: 90,
      renderCell: (img) => formatImage(img.row.image, () => openDrawer(img)),
    },
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      headerClassName: usersList.length && 'text-orange-500',
      cellClassName: 'text-orange-500 font-bold text-[24px]',
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      headerClassName: usersList.length && 'text-orange-500',
      cellClassName: 'text-orange-500 font-bold text-[24px]',
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 90,
      headerClassName: usersList.length && 'text-red-500 italic',
      cellClassName: 'text-red-500 italic font-bold text-[24px]',
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      headerClassName: usersList.length && 'text-green-500 italic',
      cellClassName: 'text-green-500 italic',
    },
    {
      field: 'birthDate',
      headerName: 'BirthDate',
      width: 110,
      headerClassName: usersList.length && 'text-blue-500 italic',
      cellClassName: 'text-blue-500 italic',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      headerClassName: usersList.length && 'text-fuchsia-500 italic',
      cellClassName: 'text-fuchsia-500 italic',
    },
  ];

  async function getUsers() {
    try {
      setIsLoading(true);
      const users = await axios.get('https://dummyjson.com/users');
      setUsersList(users.data.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function openDrawer(img) {
    setModalData({ isOpen: true, data: img });
  }

  return (
    <>
      <div className='border-[1px] min-w-[1010px] flex flex-col items-center'>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            slots={{ toolbar: usersList.length ? CustomToolBar : null }}
            sortModel={sortModel}
            onSortModelChange={(param) => setSortModel(param)}
            filterModel={filterModel}
            onFilterModelChange={(param) => setFilterModel(param)}
            loading={isLoading}
            rows={usersList}
            columns={columns}
            height={700}
            getRowClassName={() => `!max-h-[300px] !min-h-[100px]`}
            getCellClassName={() => `flex items-center`}
            getRowHeight={() => 'auto'}
            disableRowSelectionOnClick
            hideFooter
          />
        </Box>
        <button onClick={getUsers}>Fetch Users</button>
      </div>
      <UserImageModal
        modalData={modalData}
        closeModal={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
      />
    </>
  );
}
