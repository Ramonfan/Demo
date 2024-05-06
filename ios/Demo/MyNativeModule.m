//
//  NativeModule.m
//  Demo
//
//  Created by 樊启蒙 on 2024/5/6.
//

#import "MyNativeModule.h"

@implementation MyNativeModule

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getMaskString, getMaskStringWithResolve:(RCTPromiseResolveBlock)resolve andReject:(RCTPromiseRejectBlock)reject) {
  resolve(@"Hellow，This is Mask");
}

@end
