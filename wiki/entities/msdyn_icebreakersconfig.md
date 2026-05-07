---
logical: "msdyn_icebreakersconfig"
display: "icebreakersconfig"
entitySetName: "msdyn_icebreakersconfigs"
primaryId: "msdyn_icebreakersconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# icebreakersconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_icebreakersconfig` |
| Display name | icebreakersconfig |
| Display (plural) | icebreakersconfigs |
| Schema name | `msdyn_icebreakersconfig` |
| Entity set (Web API) | `msdyn_icebreakersconfigs` |
| Primary id attribute | `msdyn_icebreakersconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_icebreakersconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
POST /api/data/v9.2/msdyn_icebreakersconfigs
PATCH /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_icebreakersconfigs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_aretermsaccepted`, `msdyn_icebreakersconfigId`, `msdyn_isadminsettingenabled`, `msdyn_isentertainmentcategoryenabled`, `msdyn_isfamilycategoryenabled`, `msdyn_ishealthcategoryenabled`, `msdyn_issportscategoryenabled`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_icebreakersconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_icebreakersconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_icebreakersconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_icebreakersconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_icebreakersconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_icebreakersconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_icebreakersconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_icebreakersconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_icebreakersconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icebreakersconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icebreakersconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_icebreakersconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_icebreakersconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_icebreakersconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icebreakersconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_icebreakersconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_icebreakersconfig.md) on 2026-05-06.