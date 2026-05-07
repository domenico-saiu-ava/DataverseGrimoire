---
logical: "msdyn_recommendedactionrundetails"
display: "recommendedactionrundetails"
entitySetName: "msdyn_recommendedactionrundetailses"
primaryId: "msdyn_recommendedactionrundetailsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# recommendedactionrundetails

Stores execution run details for recommended actions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recommendedactionrundetails` |
| Display name | recommendedactionrundetails |
| Display (plural) | recommendedactionrundetails |
| Schema name | `msdyn_recommendedactionrundetails` |
| Entity set (Web API) | `msdyn_recommendedactionrundetailses` |
| Primary id attribute | `msdyn_recommendedactionrundetailsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recommendedactionrundetailses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_recommendedactionrundetailses(<guid>)
POST /api/data/v9.2/msdyn_recommendedactionrundetailses
PATCH /api/data/v9.2/msdyn_recommendedactionrundetailses(<guid>)
DELETE /api/data/v9.2/msdyn_recommendedactionrundetailses(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_executiondetails`, `msdyn_name`, `msdyn_rawactioncatalogueid`, `msdyn_recommendedactionrundetailsid`, `msdyn_retryafter`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recommendedactionrundetails_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recommendedactionrundetails_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recommendedactionrundetails_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recommendedactionrundetails_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recommendedactionrundetails` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_recommendedactionrundetails_msdyn_rawactioncatalogue` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `msdyn_rawactioncatalogueid` | `msdyn_rawactioncatalogueid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recommendedactionrundetails_SyncErrors` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_DuplicateMatchingRecord` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_DuplicateBaseRecord` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `baserecordid` | `baserecordid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_AsyncOperations` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_MailboxTrackingFolders` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_UserEntityInstanceDatas` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `objectid` | `objectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_ProcessSession` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_BulkDeleteFailures` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `regardingobjectid` | `regardingobjectid_msdyn_recommendedactionrundetails` |
| `msdyn_recommendedactionrundetails_PrincipalObjectAttributeAccesses` | [msdyn_recommendedactionrundetails](msdyn_recommendedactionrundetails.md) | `objectid` | `objectid_msdyn_recommendedactionrundetails` |


## Source

Generated from [msdyn_recommendedactionrundetails (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recommendedactionrundetails')) on 2026-05-07.