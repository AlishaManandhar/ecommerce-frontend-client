function PageInfo(props)
{
    return (
        
 <div className="page-info">
 <img src="https://preview.hasthemes.com/jadusona-v2/assets/images/hero/hero-1.jpg" alt="" />
 <div className="overlay"></div>
 <div className="container">
   <div className="row page-content mx-auto">
     <h3>{props.title}</h3>
     <nav aria-label="breadcrumb">
       <ol className="breadcrumb">
         <li className="breadcrumb-item"><a href="/">Home</a></li>
         <li className="breadcrumb-item " aria-current="page">{props.active}</li>
       </ol>
     </nav>
   </div>

 </div>
</div>
// --------------------------- page-info ends here ---------------------------------
    )
}

export default PageInfo