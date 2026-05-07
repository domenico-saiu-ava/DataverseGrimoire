---
logical: "organizationdatasyncsubscriptionentity"
display: "OrganizationDataSyncSubscriptionEntity"
entitySetName: "organizationdatasyncsubscriptionentities"
primaryId: "organizationdatasyncsubscriptionentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OrganizationDataSyncSubscriptionEntity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscriptionentity` |
| Display name | OrganizationDataSyncSubscriptionEntity |
| Display (plural) | OrganizationDataSyncSubscriptionEntities |
| Schema name | `organizationdatasyncsubscriptionentity` |
| Entity set (Web API) | `organizationdatasyncsubscriptionentities` |
| Primary id attribute | `organizationdatasyncsubscriptionentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptionentities?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptionentities
PATCH /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptionentities(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`blobpartitionby`, `importsequencenumber`, `inheritsfromotc`, `isactivity`, `name`, `objecttypecode`, `organizationdatasyncsubscriptioid`, `organizationdatasyncsubscription`, `organizationdatasyncsubscriptionentityid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscriptionentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscriptionentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscriptionentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscriptionentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscriptionentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subscription_subscriptionentity` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionentity_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscriptionentity_SyncErrors` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_DuplicateMatchingRecord` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_DuplicateBaseRecord` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_AsyncOperations` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_MailboxTrackingFolders` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_UserEntityInstanceDatas` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `objectid` | `objectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_ProcessSession` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_BulkDeleteFailures` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `objectid` | `objectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_organizationdatasyncstate_entityname` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `entityname` | `entityname` |


## Source

Generated from [organizationdatasyncsubscriptionentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationdatasyncsubscriptionentity')) on 2026-05-07.