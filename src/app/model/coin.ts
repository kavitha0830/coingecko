export interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  hashing_algorithm: string;
  description: any; // Could give strict typing in actual projects
  market_data: any;
  genesis_date: string;
}