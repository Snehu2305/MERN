import Card from '../components/card';

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-purple-500 font-bold text-3xl m-20">
        All the cards are here.
      </h2>

      <div className='grid grid-cols-3 gap-6'>
         <Card title = "card 1" desc = "card 1 description" link="https://tse4.mm.bing.net/th/id/OIP.5IOxdhS8Z0y75OxvnMtp8wHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <Card title = "card 2" desc = "card 2 description" link="https://yt3.googleusercontent.com/ytc/AIdro_m2ZqMz5TJ7Iqu_xrYEHwhbyOwDqVqqd3Ly4sGSDGDv0w=s900-c-k-c0x00ffffff-no-rj"/>
         <Card title = "card 3" desc = "card 3 description" link="https://64.media.tumblr.com/5f47adc956dda7b96863d2d50f89e4dd/tumblr_oxk8fzyA0a1wnkmqdo1_1280.jpg"/>
         <Card title = "card 4" desc = "card 4 description" link="https://i.pinimg.com/originals/19/00/c7/1900c7f66679959e09cd67cb4ea6ba31.jpg"/>
         <Card title = "card 5" desc = "card 5 description" link="https://cdn.pixabay.com/video/2024/04/04/206857_tiny.jpg"/>
         <Card title = "card 6" desc = "card 6 description" link="https://th.bing.com/th/id/OIP.VjksmT08aoA0yUAAF2AHuAHaNw?&rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <Card title = "card 7" desc = "card 7 description" link="https://i.pinimg.com/originals/03/6d/73/036d73ebc4622dbfd663d5637a98cb54.jpg"/>
         <Card title = "card 8" desc = "card 8 description" link="https://media.licdn.com/dms/image/v2/D4D10AQHfdFXwCUYXUQ/image-shrink_1280/image-shrink_1280/0/1723354213589?e=2147483647&v=beta&t=yUt4Cr5KYCcWQa9pp-B-cfpNTFA89KnblccdslDfcMo"/>
         <Card title = "card 9" desc = "card 9 description" link="https://th.bing.com/th/id/OIP.t_I4aa-YEribR_klol_G-wHaLH?&rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <Card title = "card 10" desc = "card 10 description" link="https://i.pinimg.com/originals/3e/70/33/3e7033219cb0ea01c0f525bf2d601f5c.jpg"/>
         <Card title = "card 11" desc = "card 11 description" link="https://i.pinimg.com/originals/3e/70/33/3e7033219cb0ea01c0f525bf2d601f5c.jpg"/>
         <Card title = "card 12" desc = "card 12 description" link="https://tse2.mm.bing.net/th/id/OIP.3QZCnSbc_qFHFgIy6CSkcQAAAA?r=0&w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"/>

      </div>

     
    </div>
  );
}

export default App;