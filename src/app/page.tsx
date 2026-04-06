import Link from "next/link";
import {
  Blocks,
  Check,
  Code2,
  Layers,
  Moon,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techStack = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Next.js 16",
    description: "App Router, Turbopack, React Server Components",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "TypeScript",
    description: "Strict mode 활성화, 완전한 타입 안전성",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "TailwindCSS v4",
    description: "OKLCH 색상 시스템, CSS 변수 기반 테마",
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "shadcn/ui",
    description: "radix-nova 스타일, 접근성 보장 컴포넌트",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "lucide-react",
    description: "600개 이상의 일관된 SVG 아이콘",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "usehooks-ts",
    description: "SSR-safe, 검증된 TypeScript 커스텀 훅 모음",
  },
];

const features = [
  "App Router 기반 파일 라우팅",
  "라이트 / 다크 모드 지원 (next-themes)",
  "모바일 반응형 레이아웃",
  "TypeScript strict 모드",
  "경로 별칭 (@/*) 설정 완료",
  "API 라우트 예시 포함",
  "usehooks-ts 훅 중앙 관리",
  "Geist 폰트 최적화 적용",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js 16 · React 19 · TailwindCSS v4</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Modern Next.js
          <br />
          Starter Kit
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          클론 즉시 개발을 시작할 수 있는 모던 웹 스타터킷. 검증된 기술
          스택과 베스트 프랙티스가 미리 설정되어 있습니다.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard">대시보드 보기</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">소개 페이지</Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">기술 스택</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="text-primary">{item.icon}</span>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">주요 특징</h2>
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dark mode CTA */}
      <section className="mt-20 flex flex-col items-center gap-4 text-center">
        <Moon className="h-8 w-8 text-muted-foreground" />
        <p className="text-muted-foreground">
          우측 상단의 토글 버튼으로 다크 모드를 전환해보세요.
        </p>
        <div className="flex items-center gap-2">
          <Smartphone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            모바일에서도 반응형으로 동작합니다.
          </span>
        </div>
      </section>
    </div>
  );
}
