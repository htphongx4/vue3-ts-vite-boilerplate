export interface IVehicle {
  image: string;
  name: string;
  model_id: string;
  sale_type: string;
  power: string;
  realtime: {
    battery: {
      percent: number;
      status: string;
    };
    safeBelt: Boolean;
    outOfArea: Boolean;
  };
}
