import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "Next Starter Kit 소개 페이지",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold">소개</h1>
      <p className="mb-8 text-muted-foreground">
        Next Starter Kit은 모던 웹 개발을 빠르게 시작할 수 있도록 구성된
        프로젝트 템플릿입니다.
      </p>

      <Separator className="mb-8" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">목표</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              설정에 시간을 낭비하지 않고 비즈니스 로직 개발에만 집중할 수
              있는 환경을 제공합니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">구조</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Next.js 16 App Router 기반의 src 디렉토리 구조로, 컴포넌트,
              훅, 유틸리티가 체계적으로 정리되어 있습니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">커스터마이징</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CSS 변수 기반 테마 시스템으로 색상, 폰트, 반경 등을 globals.css
              한 곳에서 관리합니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">확장성</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              shadcn/ui 컴포넌트를 필요에 따라 추가하고, usehooks-ts로
              검증된 훅을 바로 사용할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
