

import { swabService } from "../service/swab.service";


export default async function Page() {
    const data = await swabService();

    return <SwabGrid data={data} />;
}