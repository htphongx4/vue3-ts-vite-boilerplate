import { IVehicle } from "@/types/vehicle";
export const vehicleList: IVehicle[] = [
  {
    image:
      "https://us.123rf.com/450wm/rawpixel/rawpixel1412/rawpixel141203717/34403801-sports-car-on-a-white-background-.jpg?ver=6",
    name: "RT 0001",
    model_id: "string",
    sale_type: "Rent",
    power: "off",
    realtime: {
      battery: {
        percent: 2,
        status: "string",
      },
      safeBelt: true,
      outOfArea: true,
    },
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQjOBmNtaN53ztO5XIHtdnzIYEQlhmnTo7rrEQIY-tCxfF21UDBQqcJMvfxZffsGSQvc&usqp=CAU",
    name: "RT 0002",
    model_id: "string",
    sale_type: "Rent",
    power: "off",
    realtime: {
      battery: {
        percent: 22,
        status: "string",
      },
      safeBelt: true,
      outOfArea: false,
    },
  },
  {
    image:
      "https://img.freepik.com/free-vector/green-sports-car-isolated-white-vector_53876-64420.jpg?w=2000",
    name: "RT 0003",
    model_id: "string",
    sale_type: "Rent",
    power: "on",
    realtime: {
      battery: {
        percent: 58,
        status: "string",
      },
      safeBelt: false,
      outOfArea: true,
    },
  },
];
