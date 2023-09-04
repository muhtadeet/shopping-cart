import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function HorizontalCard() {
    return (
      <div className="flex justify-center my-10">
        <Card className=" w-[30rem] md:w-full max-w-4xl flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 hidden md:block rounded-r-none"
          >
            <img
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
            JUST FOR YOU
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
            Our Products are all made by standard sizes so that you can match them as you desire.
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="gradient" className="flex items-center gap-2">
                Shop Now
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }