---
logical: "msdyn_fileuploadstatustracker"
display: "File Upload Status Tracker"
entitySetName: "msdyn_fileuploadstatustrackers"
primaryId: "msdyn_fileuploadstatustrackerid"
primaryName: "msdyn_uploadfilename"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File Upload Status Tracker

File Upload Status Tracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_fileuploadstatustracker` |
| Display name | File Upload Status Tracker |
| Display (plural) | File Upload Status Tracker |
| Schema name | `msdyn_fileuploadstatustracker` |
| Entity set (Web API) | `msdyn_fileuploadstatustrackers` |
| Primary id attribute | `msdyn_fileuploadstatustrackerid` |
| Primary name attribute | `msdyn_uploadfilename` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_fileuploadstatustrackers?$select=msdyn_uploadfilename&$top=10
GET /api/data/v9.2/msdyn_fileuploadstatustrackers(<guid>)
POST /api/data/v9.2/msdyn_fileuploadstatustrackers
PATCH /api/data/v9.2/msdyn_fileuploadstatustrackers(<guid>)
DELETE /api/data/v9.2/msdyn_fileuploadstatustrackers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_attempt`, `msdyn_errorcode`, `msdyn_errormessage`, `msdyn_fileuploadstatus`, `msdyn_fileuploadstatustrackerid`, `msdyn_forecastconfigurationid`, `msdyn_forecastrecurrenceupdatedetailslist`, `msdyn_uploadedon`, `msdyn_uploadfilename`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_fileuploadstatustracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_fileuploadstatustracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_fileuploadstatustracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_fileuploadstatustracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_fileuploadstatustracker_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |



## Source

Generated from [msdyn_fileuploadstatustracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_fileuploadstatustracker')) on 2026-05-07.