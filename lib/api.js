import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://onxfncobecrsdvpqmxkr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ueGZuY29iZWNyc2R2cHFteGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMjUzMzMsImV4cCI6MjAxNTkwMTMzM30.sT5rLKKAz91O8sFKswucLBTVycFVuy7e7BQ3x90xqKI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
