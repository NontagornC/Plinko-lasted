import { SLOTCOLOR } from "../patternConfig";

const TestSummary = ({ landedSlots }) => {
  const totalDrops = landedSlots.length;
  const slotCounts: { [key: number]: number } = {};
  const colorGroups: {
    [key: string]: { slots: number[]; count: number; color: string };
  } = {};

  // Group slots by color
  Object.entries(SLOTCOLOR).forEach(([slot, color]) => {
    if (!colorGroups[color]) {
      colorGroups[color] = {
        slots: [],
        count: 0,
        color: color,
      };
    }
    colorGroups[color].slots.push(Number(slot));
  });

  // Count landings
  landedSlots.forEach((item) => {
    slotCounts[item.slotNumber] = (slotCounts[item.slotNumber] || 0) + 1;
    const slotColor = SLOTCOLOR[item.slotNumber];
    if (colorGroups[slotColor]) {
      colorGroups[slotColor].count += 1;
    }
  });

  // Calculate results per slot
  const results = Object.entries(slotCounts).map(([slot, count]) => ({
    slot: `ช่อง ${slot}`,
    count,
    percentage: (((count as number) / totalDrops) * 100).toFixed(2),
    color: SLOTCOLOR[slot],
  }));

  // Calculate results per color group
  const colorResults = Object.values(colorGroups)
    .filter((group) => (group?.count as number) > 0)
    .map((group) => ({
      color: group.color,
      slots: group.slots,
      count: group.count,
      percentage: ((group.count / totalDrops) * 100).toFixed(2),
    }));

  return (
    <div className="mt-4 w-full overflow-hidden rounded-lg bg-gray-800 text-white">
      <div className="border-b border-gray-700 p-6">
        <h2 className="text-2xl font-bold">สรุปผลการทดสอบ</h2>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="mb-3 text-lg font-bold">สรุปตามสี</h3>
              <div className="space-y-2">
                {colorResults.map((result) => (
                  <div
                    key={result.color}
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: `${result.color}20`,
                      borderLeft: `4px solid ${result.color}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        ช่อง {result.slots.join(", ")} : {result.count} ครั้ง (
                        {result.percentage}%)
                      </span>
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: result.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">รายละเอียดแต่ละช่อง</h3>
          <div className="space-y-2">
            {results.map((result) => (
              <div
                key={result.slot}
                className="rounded-lg p-4"
                style={{
                  backgroundColor: `${result.color}20`,
                  borderLeft: `4px solid ${result.color}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span>
                    {result.slot}: {result?.count as number} ครั้ง (
                    {result.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSummary;
