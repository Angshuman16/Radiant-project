
import './App.css';
import Card from './Card';
import Card04 from './Card04';
import Header from './Header';
import Heading2 from './Heading2';
import Heading4 from './Heading4';
import Menu from './Menu';
function App() {
  return (
    <div className="App">
       <Header />
      
        <h1 id="title">Best Website builders in the US </h1>
        <hr></hr>
        <Heading2 />
       <hr />
       <div className='menus'>
       <Menu name={"Tools"}/>
       <Menu name={"AWS Builder"}/>
       <Menu name={"Start Build"}/>
       <Menu name={"Build Supplies"}/>
       <Menu name={"Tooling"}/>
       <Menu name={"Blue Hosting"}/>

       </div>
      
       <Heading4 />

       <Card num={1} head={"WixPro 72-Inch Responsive Website Builder-"}desc={" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)ExceptionalMain highlights"}
        highlights={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
        stars={9.8} remarks={"Exceptional"}
       
       />

      <Card num={2} head={"SiteCraft 68-Inch Ultimate Web Design Studio-"}desc={"  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"}
        highlights={"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."}
        stars={9.3} remarks={"Excellent"} 
       
       />

       
      <Card num={3} head={"WixPro 72-Inch Responsive Website Builder-"}desc={"  Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
        highlights={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
        stars={9.5} remarks={"Exceptional"}
       
       />

       <Card04 num={4} head={"CDK Resposive Builder: "} desc={"An extensive library of widgets and apps, and detailed step-by-step guides"}highlight={[9.9,8.9,8.9]} highlighttext={["Building Responsive","Cool","Docs"]} reason={["Documents","Easy Use","Out of Box"]}stars={9.1} />


      <h1>Related Deals you might like for</h1>

       




       
      

    

    

       

       
      </div>
    
  );
}

export default App;
