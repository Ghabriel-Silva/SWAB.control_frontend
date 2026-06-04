i// page.tsx

import SwabGrid from "./SwabGrid";

export default async function Page() {
    const data = await swabService();

    return <SwabGrid data={data} />;
}