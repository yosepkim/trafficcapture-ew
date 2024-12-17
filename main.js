import { httpRequest } from 'http-request';

export  function onClientRequest(request) {
    try {
        const info = {
            clientIp: request.clientIp,
            acceptsThirdPartyCookies: request.device.acceptsThirdPartyCookies,
            brandname: request.device.brandname,
            isMobile: request.device.isMobile,
            isTablet: request.device.isTablet,
            isWireless: request.device.isWireless,
            os: request.device.os,
            osVersion: request.device.osVersion,      
            physicalScreenHeight: request.device.physicalScreenHeight,
            physicalScreenWidth: request.device.physicalScreenWidth,
            resolutionHeight: request.device.resolutionHeight,
            resolutionWidth: request.device.resolutionWidth,
            uri: request.url,
            areaCodes: request.userLocation.areaCodes,
            bandwidth: request.userLocation.bandwidth,
            city: request.userLocation.city,
            continent: request.userLocation.continent,
            country: request.userLocation.country,
            latitude: request.userLocation.latitude,
            longitude: request.userLocation.longitude,
            timezone: request.userLocation.timezone,
            zipCode: request.userLocation.zipCode
        }
        const token = '';
        const url = 'https://bb.edgecloud9.com/trafficinfo';
        const options = {
            method: 'POST',
            headers: { 'Authorization': `Basic ${token}`, 'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        };
        httpRequest(url, options);
    } catch (exception) {
        request.respondWith(500, {}, `Error occurred: ${exception}`);
    }
}