import type { Metadata } from "next";
import { Activity, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "shadcn/ui 컴포넌트 쇼케이스 페이지",
};

const stats = [
  {
    title: "총 사용자",
    value: "12,340",
    change: "+12%",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "월간 매출",
    value: "₩4,820,000",
    change: "+8%",
    icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "신규 주문",
    value: "284",
    change: "+3%",
    icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "활성 세션",
    value: "1,038",
    change: "-2%",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
  },
];

const badgeVariants = [
  { variant: "default", label: "Default" },
  { variant: "secondary", label: "Secondary" },
  { variant: "destructive", label: "Destructive" },
  { variant: "outline", label: "Outline" },
] as const;

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold">Dashboard</h1>
      <p className="mb-8 text-muted-foreground">
        shadcn/ui 컴포넌트 쇼케이스 — Card, Badge, Separator
      </p>

      {/* 통계 카드 */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">통계</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  전월 대비{" "}
                  <span
                    className={
                      stat.change.startsWith("+")
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {stat.change}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Badge 쇼케이스 */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">Badge 컴포넌트</h2>
        <div className="flex flex-wrap gap-3">
          {badgeVariants.map(({ variant, label }) => (
            <Badge key={variant} variant={variant}>
              {label}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* API 예시 안내 */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">API 라우트 예시</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-3 text-sm text-muted-foreground">
              다음 엔드포인트에서 API 라우트 예시를 확인할 수 있습니다.
            </p>
            <code className="rounded bg-muted px-3 py-1.5 text-sm font-mono">
              GET /api/hello
            </code>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
