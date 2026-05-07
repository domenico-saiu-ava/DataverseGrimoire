---
logical: "msdyn_omnichannelpersonalization"
display: "Omnichannel Personalization"
entitySetName: "msdyn_omnichannelpersonalizations"
primaryId: "msdyn_omnichannelpersonalizationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel Personalization

Stores personalization information of Omnichannel Agent/Supervisor dashboards

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelpersonalization` |
| Display name | Omnichannel Personalization |
| Display (plural) | Omnichannel Personalizations |
| Schema name | `msdyn_omnichannelpersonalization` |
| Entity set (Web API) | `msdyn_omnichannelpersonalizations` |
| Primary id attribute | `msdyn_omnichannelpersonalizationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelpersonalizations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
POST /api/data/v9.2/msdyn_omnichannelpersonalizations
PATCH /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_omnichannelpersonalizationId`, `msdyn_personalizationcontextkey`, `msdyn_personalizationvalue`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_omnichannelpersonalization` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_omnichannelpersonalization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelpersonalization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelpersonalization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelpersonalization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_omnichannelpersonalization` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_omnichannelpersonalization` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_omnichannelpersonalization` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelpersonalization_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelpersonalization_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelpersonalization_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelpersonalization_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_omnichannelpersonalization_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelpersonalization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_omnichannelpersonalization.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_omnichannelpersonalization.md) on 2026-05-06.