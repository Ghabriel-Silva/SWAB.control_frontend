

import SwabGrid from "./SwabGrid";

export default async function Page() {
    const data = await swabServic();

    return <SwabGrid data={data} />;
}