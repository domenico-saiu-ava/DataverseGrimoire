---
logical: "organizationdatasyncsubscriptionfnotable"
display: "OrganizationDataSyncSubscriptionFnoTable"
entitySetName: "organizationdatasyncsubscriptionfnotables"
primaryId: "organizationdatasyncsubscriptionfnotableid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OrganizationDataSyncSubscriptionFnoTable

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscriptionfnotable` |
| Display name | OrganizationDataSyncSubscriptionFnoTable |
| Display (plural) | OrganizationDataSyncSubscriptionFnoTables |
| Schema name | `organizationdatasyncsubscriptionfnotable` |
| Entity set (Web API) | `organizationdatasyncsubscriptionfnotables` |
| Primary id attribute | `organizationdatasyncsubscriptionfnotableid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptionfnotables?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptionfnotables
PATCH /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptionfnotables(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`blobpartitionby`, `importsequencenumber`, `inheritsfromotc`, `isactivity`, `name`, `objecttypecode`, `organizationdatasyncsubscriptioid`, `organizationdatasyncsubscription`, `organizationdatasyncsubscriptionfnotableid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscriptionfnotable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscriptionfnotable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscriptionfnotable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscriptionfnotable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscriptionfnotable` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subscription_subscriptionfnotable` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionfnotable_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscriptionfnotable_SyncErrors` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_DuplicateMatchingRecord` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_DuplicateBaseRecord` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_AsyncOperations` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_MailboxTrackingFolders` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_UserEntityInstanceDatas` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `objectid` | `objectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_ProcessSession` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_BulkDeleteFailures` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `objectid` | `objectid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_organizationdatasyncfnostate_entityname` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `entityname` | `entityname` |


## Source

Generated from [organizationdatasyncsubscriptionfnotable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationdatasyncsubscriptionfnotable')) on 2026-05-07.