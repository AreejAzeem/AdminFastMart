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
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconContext } from "react-icons";
import "./TablePagination.css";
import config from "../../../../config/config";

// function createData(
//   orderNum,
//   orderDate,
//   customerName,
//   paymentMethod,
//   quantity,
//   total
// ) {
//   return {
//     orderNum,
//     orderDate,
//     customerName,
//     paymentMethod,
//     quantity,
//     total,
//   };
// }

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
    id: "productImg",
    numeric: false,
    disablePadding: false,
    label: "Product Image",
    align: "center",
  },
  {
    id: "productBarcode",
    numeric: false,
    disablePadding: false,
    label: "Barcode",
    align: "center",
  },
 
  {
    id: "productName",
    numeric: false,
    disablePadding: false,
    label: "Product Name",
    align: "center",
  },
  {
    id: "productCategory",
    numeric: false,
    disablePadding: false,
    label: "Product Category",
    align: "center",
  },
  {
    id: "productRetailPrice",
    numeric: true,
    disablePadding: false,
    label: "Retail Price",
  },
  
  {
    id: "productPrice",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "productStock",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  // {
  //   id: "details",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Details",
  //   align:"left",
  // },
  // {
  //   id: "edit",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Edit",
  // },
];

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
    <TableHead >
      <TableRow style={{backgroundColor:"#f5f2f0"}}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all orders",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
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
        <TableCell><Typography className="tablehead_detail" style={{fontSize:"0.875rem", fontWeight:"500",fontFamily: "'Inter', sans-serif"}}>Details</Typography></TableCell>
        <TableCell><Typography className="tablehead_edit" style={{fontSize:"0.875rem", fontWeight:"500",fontFamily: "'Inter', sans-serif"}}>Edit</Typography></TableCell>
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


export default function TablePaginateProduct(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("productSKU");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [product, setProduct] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(
    () => {  
      getProducts();
    },[props.filteredData]
  );
const deleteProduct = async (ids) => {
    console.warn("hi deleteee" + ids[0]);
    ids.map(async(id)=>{
    let result = await fetch(config.apiURL + "/products/product/" + id, {
      method: "delete",
    });
    result = await result.json();
    console.log(result);
    if (result["message"] === "Success") {
      alert("Record Deleted");
      setProduct(product.filter((item) => item.productId !== id));
    }
  });
  setSelected([]);
};
  const getProducts = async () => {
    setRows([]);
    console.log(props.filteredData);
    if(props.filteredData.length>0){
      console.log(props.filteredData);
      console.log("in line 229 "+props.filteredData.length);
      setProduct(props.filteredData);
    }
    else{
    
    // let result = await fetch("http://192.168.30.176:4000/categories/category");
    // let result = await fetch("http://localhost:5000/products/product");
    let result = await fetch(config.apiURL + "/products/product");
    result = await result.json();
    console.log("product"+product);
    console.log(result);
    setProduct(result["data"]);
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
    }
  };
  const EnhancedTableToolbar = (selected) => {
    const { numSelected } = selected;
    console.log("line 265 "+numSelected);
  
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
      {console.log("line 216 ")}
        {numSelected.length > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected.length} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Products
          </Typography>
        )}
  
        {numSelected.length > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={()=>deleteProduct(numSelected)}>
            {console.log("line 240 before delete")}
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) :null
        //  (
        //   <Tooltip tit le="Filter list">
        //     <IconButton>
        //       <FilterListIcon />
        //     </IconButton>
        //   </Tooltip>
        // )
        }
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
      const newSelecteds = product.map((n) => n.id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - product.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
      {console.log("i 390 " +selected.map((i)=>i))}
        <EnhancedTableToolbar numSelected={selected}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
          {console.log("in line 404 "+ orderBy)}
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={product.length}
              style={{ textAlign: "center",
           }}
            />
            <TableBody>
              
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
             { console.log("line 382")}
             { stableSort(product, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  console.log("in line 386"+row[index]);
                  const isItemSelected = isSelected(row.productId);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  var url = config.apiURL;
                  return (
                   
                      
                  
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.productId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.productId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell><div style={{ backgroundColor: "white", width: "3px",}}>
                    <img
                      style={{ width: "40px", borderRadius: "5px" ,marginLeft:"45px"}}
                      src={url + row.productImg}
                      alt=""
                    />
                  </div></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.productBarcode}
                      </TableCell>
                     
                      <TableCell align="center">{row.productName}</TableCell>
                      <TableCell align="center">{row.category.categoryName}</TableCell>
                      <TableCell align="center">{row.productRetailPrice}</TableCell>
                      <TableCell align="center">{row.productPrice}</TableCell>
                      <TableCell style={{
                        color: (row.stockStatus === "in" || row.stockStatus==="In" || row.stockStatus==="IN" )? "green" : (row.stockStatus==="Out" || row.stockStatus==="out" || row.stockStatus==="OUT") ? "red" :"black",
                     fontWeight: "bold",
                     fontSize: "15px",
                    
                       
                      }} align="center">{row.stockStatus }</TableCell>
                      <TableCell align="center"> {
                    <IconContext.Provider value={{ color: "blue" }}>
                      <Link to={"/products/Detail/" + row.productId}>
                        <VisibilityOutlinedIcon />
                      </Link>
                    </IconContext.Provider>
                  }</TableCell>
                  <TableCell> <div>
                    <Link to={"/updateproduct/" + row.productId} >
                      <ModeEditOutlineIcon
                        style={{
                          margin: "3px",
                          color: "#de751f",
                          cursor: "pointer",
                        }}
                      />
                    </Link>

                  </div></TableCell>
                  
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
          count={product.length}
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
