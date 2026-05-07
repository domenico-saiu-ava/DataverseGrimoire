---
logical: "msdyn_ocsystemmessage"
display: "Automated Message"
entitySetName: "msdyn_ocsystemmessages"
primaryId: "msdyn_ocsystemmessageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Automated Message

Stores the system messages sent to the message receiver for various events.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsystemmessage` |
| Display name | Automated Message |
| Display (plural) | Automated Messages |
| Schema name | `msdyn_ocsystemmessage` |
| Entity set (Web API) | `msdyn_ocsystemmessages` |
| Primary id attribute | `msdyn_ocsystemmessageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsystemmessages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
POST /api/data/v9.2/msdyn_ocsystemmessages
PATCH /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
DELETE /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_defaultlanguage`, `msdyn_instanceid`, `msdyn_isrecurring`, `msdyn_messagedescription`, `msdyn_messageinterval`, `msdyn_messagereceiver`, `msdyn_messagetemplatetrigger`, `msdyn_messagetext`, `msdyn_messagetype`, `msdyn_name`, `msdyn_ocsystemmessageId`, `msdyn_repeatcount`, `msdyn_streamsource`, `msdyn_systemmessageeventtype`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsystemmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsystemmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsystemmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsystemmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_defaultlanguage` | `msdyn_defaultlanguage` |
| `organization_msdyn_ocsystemmessage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsystemmessage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsystemmessage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsystemmessage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsystemmessage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsystemmessage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsystemmessage_msdyn_oclocalizationdata` | _n/a_ | `msdyn_systemmessageid` | _n/a_ |
| `msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsystemmessage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsystemmessage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` | [msdyn_ocsystemmessageid](msdyn_ocsystemmessageid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocsystemmessage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsystemmessage.md) on 2026-05-06.