const SUPABASE_URL = 'https://icyrbwltlybmigeljxmh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeXJid2x0bHlibWlnZWxqeG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMxMzMsImV4cCI6MTk2Nzg3OTEzM30.kUzjWO4wi0A9AVcWdFt_BG9uq-HBZoAR2aZ4IRN55yw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCrystals() {
    const resp = await client.from('crystals').select('*');
    console.log(resp);
    return resp.data;
}

export async function getCrystalById(id) {
    const resp = await client.from('crystals').select('*').match({ id: id }).single();

    return resp.data;
}
