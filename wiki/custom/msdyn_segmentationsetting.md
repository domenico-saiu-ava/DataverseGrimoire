---
logical: "msdyn_segmentationsetting"
display: "segmentsetting"
entitySetName: "msdyn_segmentationsettings"
primaryId: "msdyn_segmentationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# segmentsetting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segmentationsetting` |
| Display name | segmentsetting |
| Display (plural) | segmentsettings |
| Schema name | `msdyn_segmentationsetting` |
| Entity set (Web API) | `msdyn_segmentationsettings` |
| Primary id attribute | `msdyn_segmentationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segmentationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segmentationsettings(<guid>)
POST /api/data/v9.2/msdyn_segmentationsettings
PATCH /api/data/v9.2/msdyn_segmentationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_segmentationsettings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_isdiagnosticsenabled`, `msdyn_name`, `msdyn_segmentationsettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentationsetting_SyncErrors` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_DuplicateMatchingRecord` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_DuplicateBaseRecord` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `baserecordid` | `baserecordid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_AsyncOperations` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_MailboxTrackingFolders` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_UserEntityInstanceDatas` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `objectid` | `objectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_ProcessSession` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_BulkDeleteFailures` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_segmentationsetting` |
| `msdyn_segmentationsetting_PrincipalObjectAttributeAccesses` | [msdyn_segmentationsetting](msdyn_segmentationsetting.md) | `objectid` | `objectid_msdyn_segmentationsetting` |


## Source

Generated from [msdyn_segmentationsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_segmentationsetting')) on 2026-05-07.