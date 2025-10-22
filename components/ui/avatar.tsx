"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders the root avatar container element with default styling and optional additional classes.
 *
 * @param className - Additional CSS classes to merge with the component's default avatar styles
 * @returns A React element for the avatar root with `data-slot="avatar"` and the merged classes
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with default aspect and sizing classes and optional additional classes.
 *
 * @param className - Additional CSS class names to merge with the default image classes.
 * @returns The rendered AvatarPrimitive.Image element with merged classes and a `data-slot="avatar-image"` attribute.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders the avatar fallback content displayed when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes appended to the default fallback styles.
 * @param props - Props forwarded to the underlying AvatarPrimitive.Fallback element.
 * @returns A React element representing the avatar fallback container.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }