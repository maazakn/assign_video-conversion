import React,{useState,useEffect} from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import './Table.css'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { handleCities } from "../../actions/CityAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCityData } from "../api";
 const Table= () => {
   const history = useHistory()
    const [currentPage, setcurrentPage] = useState(1);
    const [limit, setlimit] = useState(10);
    const [citydata, setcitydata] = useState();
    const [sortCriteria, setsortCriteria] = useState(1);
    const [param, setparam] = useState('city');
    const [search, setsearch] = useState("");
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(0);
    let token = localStorage.getItem("token");
    useEffect(() => {
      if (!token) {
        history.push("/");
      }
    });
    const getPrev = () => {
        if (currentPage > 1) {
          setcurrentPage(currentPage - 1)
          getData();
        }
      };
      const getNext = () => {
        if (citydata.length > 0) {
          
          getData();
          setcurrentPage(currentPage + 1);
        
        }
      };
      const getData=()=>{
      }
      const filterSubmit = (e) => {
        e.preventDefault();
        const fetchAPI = async () => {
          try {
            setcitydata(
              await getCityData(
                currentPage,
                limit,
                sortCriteria,
                param,
                search,
                min,
                max
              )
            );
            setsearch("");
          } catch (err) {
            console.log(err);
          }
        };
        fetchAPI();
      };
      useEffect(() => {
        const fetchAPI = async () => {
          try {
            setcitydata(
              await getCityData(
                currentPage,
                limit,
                sortCriteria,
                param,
                search,
                min,
                max
              )
            );
          } catch (err) {
            console.log(err);
          }
        };
        fetchAPI();
      }, [ currentPage,
        limit,
        sortCriteria,
        param,
        search,
        ]);
    return (
        <>
        
         <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => {
                setcurrentPage(1);
                setsearch(e.target.value);
                setmax(0);
                setmin(0)
                getData();
              }}
            />
            <button type="submit" className="searchButton" onClick={getData}>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div
            className="dropdown"
           
          >
            <button className="dropbtn">Filter On Population</button>
            <div className="dropdown-content">
              <form style={{ display: "inline-block" }}>
              <label>
              Min 
              <input
                  type="text"
                  placeholder="min range"
                  style={{ marginBottom: "5px" }}
                  value={min}
                  onChange={(v) => {
                    setmin(v.target.value);
                  }}
                />
              
                </label> 
                <label>
              Max
                <input
                  type="text"
                  placeholder="max range"
                  style={{ marginBottom: "5px" }}
                  value={max}
                  onChange={(v) => {
                    setmax(v.target.value);
                  }}
                />
                  </label> 
                <button
                  className="dropbtn"
                  type="submit"
                  onClick={(e) => {
                    setcurrentPage(1);
                    setsearch('');
                    getData();
                    filterSubmit(e)
                  }}
                >
                  Find
                </button>
              </form>
            </div>
          </div>
             <div class="table-wrapper">
                <table class="fl-table">
        <thead>
        <tr>
            <th>CITY{' '}
            <FaLongArrowAltUp
                  style={{cursor:'pointer'}}
                    onClick={() => {
                      setsortCriteria(1);
                      setparam("city");
                      setcurrentPage(1);
                      setsearch('');
                      setmax(0);
                      setmin(0)
                      getData();
                    }}
                  />{' '}
                  <FaLongArrowAltDown
                  style={{cursor:'pointer'}}
                    onClick={() => {
                      setsortCriteria(-1);
                      setparam("city");
                      setcurrentPage(1);
                      setsearch('');
                      setmax(0);
                      setmin(0)
                      getData();
                    }}
                  />
            </th>
            <th>POPULATION
            {' '}
            <FaLongArrowAltUp
                  style={{cursor:'pointer'}}
                    onClick={() => {
                        setsortCriteria(1);
                        setparam("pop");
                        setcurrentPage(1);
                        setsearch('');
                        setmax(0);
                        setmin(0)
                        getData();
                    }}
                  />{' '}
                  <FaLongArrowAltDown
                  style={{cursor:'pointer'}}
                    onClick={() => {
                        setsortCriteria(-1);
                        setparam("pop");
                        setcurrentPage(1);
                        setsearch('');
                        setmax(0);
                        setmin(0)
                        getData();
                    }}
                  />
            </th>
            <th>STATE
            {' '}
            <FaLongArrowAltUp
                  style={{cursor:'pointer'}}
                    onClick={() => {
                        setsortCriteria(1);
                        setparam("state");
                        setcurrentPage(1);
                        setsearch('');
                        setmax(0);
                        setmin(0)
                        getData();
                    }}
                  />{' '}
                  <FaLongArrowAltDown
                  style={{cursor:'pointer'}}
                    onClick={() => {
                        setsortCriteria(-1);
                        setparam("state");
                        setcurrentPage(1);
                        setsearch('');
                        setmax(0);
                        setmin(0)
                        getData();
                    }}
                  />
            </th>
            <th>LOCATION </th>
        </tr>
        </thead>
        <tbody>
        {!(citydata?.length >= 1) ? (
                <div style={{ textAlign: "center", marginLeft: "50px" }}>
                  <CircularProgress
                    style={{ marginLeft: "400px", marginTop: "100px" }}
                  />
                </div>
              ) : (
                citydata?.map((a, i) => {
                  return (
                    <tr>
                      <td data-table-header="City">{a.city}</td>
                      <td data-table-header="Population">{a.pop}</td>
                      <td data-table-header="State">{a.state}</td>
                      <td data-table-header="Location">
                        {a.loc[0] + " , " + a.loc[1]}
                      </td>
                    </tr>
                  );
                }))}
        </tbody>
    </table>
    <div style={{ margin: "30px" }}>
            {" "}
            <button className="filterbtn" onClick={getPrev}>
              previous
            </button>
            <button className="filterbtn">{currentPage}</button>

            <button className="filterbtn" onClick={getNext}>
              Next
            </button>
            <div
              className="dropdown"
              style={{ paddingLeft: "20px", paddingTop: "50px" }}
            >
              <button className="dropbtn">Limit</button>
              <div className="dropdown-content" style={{ bottom: "100px" }}>
                <a
                  href="#"
                  onClick={() => {
                    setlimit(10);
                    getData();
                  }}
                >
                  10
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setlimit(50);
                    getData();
                  }}
                >
                  50
                </a>
              </div>
            </div>
          </div>
</div>
        </>
    )
}
export default Table;