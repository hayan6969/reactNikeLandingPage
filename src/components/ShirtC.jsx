import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
  } from "@material-tailwind/react";
  import Button2 from "./Button2";
  import {Cart} from '../assets/icons';
   
  export function ShirtC({image,title,info,price}) {
    return (
        
      
        <Card className="w-[350px] h-[420px] shadow-3xl mb-5 px-5  max-lg:w-80 max-lg:h-81 flex justify-center items-center">
        <CardHeader shadow={false} floated={false} className="w-[200px] h-[250px] ">
          <img
            src={image}
           
            
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-center ">
            <Typography  className="text-black font-palanquin mt-1 font-3xl font-bold">
                {title}
            </Typography>
          </div>
          <div className="flex justify-center items-center mt-2">
          <Typography
           
           className="font-montserrat font-medium font-xl text-black "
         >
           {info}
         </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-4 pb-3 flex justify-center items-center">
          {/* <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 mt-5 mb-5 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Shop Now
          </Button> */}
          <Button2 label={price} name={title} image={image} price={price}  iconURL={Cart} />
        </CardFooter>
      </Card>
      
    );
  }