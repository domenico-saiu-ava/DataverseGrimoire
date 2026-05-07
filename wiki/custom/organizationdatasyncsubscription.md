---
logical: "organizationdatasyncsubscription"
display: "OrganizationDataSyncSubscription"
entitySetName: "organizationdatasyncsubscriptions"
primaryId: "organizationdatasyncsubscriptionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# OrganizationDataSyncSubscription

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationdatasyncsubscription` |
| Display name | OrganizationDataSyncSubscription |
| Display (plural) | OrganizationDataSyncSubscriptions |
| Schema name | `organizationdatasyncsubscription` |
| Entity set (Web API) | `organizationdatasyncsubscriptions` |
| Primary id attribute | `organizationdatasyncsubscriptionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationdatasyncsubscriptions?$select=name&$top=10
GET /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
POST /api/data/v9.2/organizationdatasyncsubscriptions
PATCH /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
DELETE /api/data/v9.2/organizationdatasyncsubscriptions(<guid>)
```

## Attributes

Writable: **30** · Read-only: **8**

### Writable

`aadapplicationid`, `blobpartitionby`, `cansyncallmetadata`, `dataendpointpostingtype`, `dataprocessingtype`, `endpointsettings`, `entityfilters`, `entitysettings`, `fullsynconly`, `importsequencenumber`, `isoutofboxsubscription`, `migrationstate`, `name`, `needcopyattachmentstoblob`, `needtocopyfilestoblob`, `newentities`, `newfnotables`, `organizationdatasyncsubscriptionid`, `overriddencreatedon`, `partnerprefix`, `statecode`, `statuscode`, `subscribedtoallentities`, `subscriptionendpointstatus`, `subscriptionentities`, `subscriptionfnotables`, `timezoneruleversionnumber`, `unsubscribedentities`, `unsubscribedfnotables`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationdatasyncsubscription_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationdatasyncsubscription_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationdatasyncsubscription_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationdatasyncsubscription_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationdatasyncsubscription` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationdatasyncsubscription_SyncErrors` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_DuplicateMatchingRecord` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_DuplicateBaseRecord` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_AsyncOperations` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_MailboxTrackingFolders` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_UserEntityInstanceDatas` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `objectid` | `objectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_ProcessSession` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_BulkDeleteFailures` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `objectid` | `objectid_organizationdatasyncsubscription` |
| `subscription_subscriptionentity` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionentity_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |
| `subscription_subscriptionfnotable` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptioid` | `organizationdatasyncsubscriptionId` |
| `subscription_subscriptionfnotable_duplicate` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscription` | `organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_organizationdatasyncstate_organizationdatasyncsubscriptionid` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptionid` | `organizationdatasyncsubscriptionid` |
| `organizationdatasyncsubscription_organizationdatasyncfnostate_organizationdatasyncsubscriptionid` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `organizationdatasyncsubscriptionid` | `organizationdatasyncsubscriptionid` |


## Source

Generated from [organizationdatasyncsubscription (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationdatasyncsubscription')) on 2026-05-07.