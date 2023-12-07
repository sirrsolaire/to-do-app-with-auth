import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://rcfwwmcmbvvtrsftdran.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZnd3bWNtYnZ2dHJzZnRkcmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MDg2MjUsImV4cCI6MjAxNDE4NDYyNX0.-iNqMif1u54tKaB06r7EqJDcLp8c4vmx6WLLjPQbaBA";

export default createClient(supabaseUrl, supabaseAnonKey);

