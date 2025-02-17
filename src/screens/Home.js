import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards';
//import Carousel from '../components/Carousel';

export default function Home() {
  const [search,setSearch] = useState([]);
  const [foodCat,setFoodCat] = useState([]);
  const [foodItem,setFoodItem] = useState([]);
    const loadData = async()=>{
      let response = await fetch("http://localhost:5000/api/foodData",{
        method:"POST",
        headers:{
          'content-type':'application/json'
        }
      });
      response = await response.json();
      console.log(response[0],response[1])
      setFoodItem(response[0])
      setFoodCat(response[1])
    }
    useEffect(()=>{
      loadData()
    },[])


  return (
    <div>
      <div><Navbar /></div>
          <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" 
          style={{ objectFit:'contain !important' }}>
        <div className="carousel-inner" id='carousell'>
          <div className="carousel-caption" style={{ zIndex:"10" }}>
          <div className="d-flex justify-content-center">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
        </div>
          </div>
        <div className="carousel-item active">
          <img src="images/hamburger.jpg" className="d-block w-100" alt="..." style={{ height:"700px" }}/>
        </div>
        <div className="carousel-item">
          <img src="images/kebab.jpg" className="d-block w-100" alt="..." style={{ height:"700px" }}/>
        </div>
        <div className="carousel-item">
          <img src="images/berbecue.jpg" className="d-block w-100" alt="..." style={{ height:"700px" }}/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
      <div className='container'>
        { 
        foodCat !=[] 
        ? foodCat.map((data)=>{ 
          return (
          <div className='row mb-3 justify-content-around'>
          <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
          <hr/>
          {foodItem != []
          ?
          foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toString().toLowerCase())))
            .map(filterItems=>{
              return(
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'><Cards
                foodName = {filterItems.name} options={filterItems.options[0]} imgSrc={filterItems.img}/></div>
              )
            }
          ):<div>No such Data found!</div>}
          </div>
              )
        })
        : ""
       }
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
