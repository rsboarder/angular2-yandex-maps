import { EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import * as mapTypes from '../ya-maps-types';
import { MarkerManager } from '../services/managers/marker-manager';
export declare class YaMarker implements OnChanges, OnDestroy {
    private _markerManager;
    id: string;
    latitude: number;
    longitude: number;
    balloonLayout: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    draggable: boolean;
    preset: string;
    iconContent: string;
    showInfo: boolean;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    markerClick: EventEmitter<YaMarker>;
    dragEnd: EventEmitter<mapTypes.MapMouseEvent>;
    constructor(_markerManager: MarkerManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _addEventListeners();
    ngOnDestroy(): void;
}
