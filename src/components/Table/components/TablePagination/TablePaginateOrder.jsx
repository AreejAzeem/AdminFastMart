import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import "./TablePagination.css";
import config from "../../../../config/config";

function createData(
  orderNum,
  orderDate,
  customerName,
  paymentMethod,
  quantity,
  total
) {
  return {
    orderNum,
    orderDate,
    customerName,
    paymentMethod,
    quantity,
    total,
  };
}

// const rows = [
//   createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//   createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//    createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//    createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//     createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//      createData("6743e", "25/3/2020", "areej", "cash",12,9876),
//      createData("6743e", "25/3/2020", "areej", "cash",12,9876),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

const headCells = [
  {
    id: "orderNum",
    numeric: false,
    disablePadding: false,
    label: "Order Number",
    align: "center",
  },
  {
    id: "orderDate",
    numeric: false,
    disablePadding: false,
    label: "Order Date",
    align: "center",
  },
  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer Name",
    align: "center",
  },
  {
    id: "paymentMethod",
    numeric: false,
    disablePadding: false,
    label: "Payment Method",
    align: "center",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
];




export default function TablePaginateOrder() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderResult, setOrderResult] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(
    () => {
     
      getOrders();
    },[]
  );
 
  const getOrders = async () => {
    setRows([]);
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    // let result = await fetch("http://localhost:5000/products/product");
    let result = await fetch(config.apiURL + "/orders/orderAll");
    result = await result.json();
    console.log("before ordernum");
    console.log(result["data"][0]);
    setOrderResult(result["data"]);
    // for(var i=0; i<=result["data"].length;i++){
    //   setOrderResult(orderResult.concat(result["data"][i]));
    //   console.log("in line 270"+ result["data"][i].orderUser.username);
    // }
    //     result["data"].map((item,i)=>{
    // setOrderResult(item[i]);
    // console.log("in line 270"+ item[i]);
    //     });
    // setOrderResult(result["data"]);
    console.log("hghghuhg");
    // orderResult.forEach((item) => {
    //     console.log("in line 276" + item.orderUser.username);
    //    var obj= createData(
    //       item.orderNo,
    //       item.orderDate,
    //       item.orderUser.username,
    //       item.paymentMethod,
    //       item.quantity,
    //       item.total
    //     )
    //     setRows([...rows,obj]);
    //     console.log("in line 297 "+ rows.length);

    // });
    //   createData(result["data"].orderNo)
  };
  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "center"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected.length > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected.length > 0 ? (
       null
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Orders
        </Typography>
      )}

      {numSelected.length > 0 ? (

         null
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
  
  function stableSort(array, comparator) {
    console.log("line 75 "+rows.length);
    const stabilizedThis = array.map((el, index) => [el, index]);
    console.log("in line 77"+ stabilizedThis.length);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    console.log(selected + "  in selected");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              style={{ textAlign: "center" }}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
             { console.log("line 382")}
             { stableSort(orderResult, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  console.log("in line 386"+row[index]);
                  const isItemSelected = isSelected(row.orderId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.orderId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}  >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"  >
                        {row.orderNo}
                      </TableCell>
                      <TableCell align="center">{row.orderDate}</TableCell>
                      <TableCell align="center">{row.orderUser.username}</TableCell>
                      <TableCell align="center">{row.paymentMethod}</TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orderResult.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
