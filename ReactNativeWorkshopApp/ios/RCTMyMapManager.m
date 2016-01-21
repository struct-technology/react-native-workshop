//
//  RCTMyMapManager.m
//  ReactNativeWorkshopApp
//
//  Created by Matheus Santos on 1/20/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import "RCTMyMapManager.h"

@implementation RCTMyMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
