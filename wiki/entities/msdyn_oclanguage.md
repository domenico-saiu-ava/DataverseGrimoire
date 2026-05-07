---
logical: "msdyn_oclanguage"
display: "Language"
entitySetName: "msdyn_oclanguages"
primaryId: "msdyn_oclanguageid"
primaryName: "msdyn_languagename"
tableType: "Standard"
ownership: "UserOwned"
---

# Language

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oclanguage` |
| Display name | Language |
| Display (plural) | Languages |
| Schema name | `msdyn_oclanguage` |
| Entity set (Web API) | `msdyn_oclanguages` |
| Primary id attribute | `msdyn_oclanguageid` |
| Primary name attribute | `msdyn_languagename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oclanguages?$select=msdyn_languagename&$top=10
GET /api/data/v9.2/msdyn_oclanguages(<guid>)
POST /api/data/v9.2/msdyn_oclanguages
PATCH /api/data/v9.2/msdyn_oclanguages(<guid>)
DELETE /api/data/v9.2/msdyn_oclanguages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_languagename`, `msdyn_localecode`, `msdyn_localeid`, `msdyn_oclanguageId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_oclanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_oclanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oclanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oclanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oclanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_oclanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_oclanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_oclanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid` | _n/a_ | `msdyn_customerlanguageid` | _n/a_ |
| `msdyn_msdyn_oclanguage_msdyn_ocmessagemaskingrule_oclanguageid` | _n/a_ | `msdyn_oclanguageid` | _n/a_ |
| `msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage` | _n/a_ | `msdyn_sourcelanguage` | _n/a_ |
| `msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage` | _n/a_ | `msdyn_defaultlanguage` | _n/a_ |
| `msdyn_ocdispositioncode_languageid_msdyn_oclanguage` | _n/a_ | `msdyn_languageid` | _n/a_ |
| `msdyn_oclanguage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclanguage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclanguage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_oclanguage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_oclanguage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclanguage_msdyn_oclocalizationdata` | _n/a_ | `msdyn_customerlanguageid` | _n/a_ |
| `msdyn_oclanguage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_oclanguage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_oclanguage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_oclanguage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_oclanguage.md) on 2026-05-06.