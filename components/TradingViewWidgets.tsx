/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import cn from "clsx";

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

function TradingViewWidget({
    title,
    scriptUrl,
    config,
    height,
    className,
}: TradingViewWidgetProps) {
    const container = useTradingViewWidget(scriptUrl, config, height);

    return (
        <div className="w-full">
            {title && (
                <h3 className="font-semibold text-2xl mb-5 text-gray-100">
                    {title}
                </h3>
            )}
            <div
                className={cn("tradingview-widget-container", className)}
                ref={container}
            >
                <div
                    className="tradingview-widget-container__widget"
                    style={{ height, width: "100%" }}
                />
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
