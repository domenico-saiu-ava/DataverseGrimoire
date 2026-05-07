---
logical: "msdyn_mostcontacted"
display: "Most Contacted"
entitySetName: "msdyn_mostcontacteds"
primaryId: "msdyn_mostcontactedid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Most Contacted

Most Contacted

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_mostcontacted` |
| Display name | Most Contacted |
| Display (plural) | Most Contacted |
| Schema name | `msdyn_mostcontacted` |
| Entity set (Web API) | `msdyn_mostcontacteds` |
| Primary id attribute | `msdyn_mostcontactedid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_mostcontacteds?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_mostcontacteds(<guid>)
POST /api/data/v9.2/msdyn_mostcontacteds
PATCH /api/data/v9.2/msdyn_mostcontacteds(<guid>)
DELETE /api/data/v9.2/msdyn_mostcontacteds(<guid>)
```

## Attributes

Writable: **28** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_account_regardingObjectId`, `msdyn_computationaccuracy`, `msdyn_contact_regardingObjectId`, `msdyn_entityid`, `msdyn_entityImage_url`, `msdyn_entityname`, `msdyn_kpidatajson`, `msdyn_lastcontactedby`, `msdyn_lastcontactedon`, `msdyn_lead_regardingObjectId`, `msdyn_mostcontactedId`, `msdyn_name`, `msdyn_numberofemails`, `msdyn_numberofinmails`, `msdyn_numberofmeetings`, `msdyn_numberofphonecalls`, `msdyn_opportunity_regardingObjectId`, `msdyn_primaryname`, `msdyn_regardingentityid`, `msdyn_regardingentityname`, `msdyn_relationshiphealthscorecolor`, `msdyn_relationshiphealthscorevalue`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_mostcontacted_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mostcontacted_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mostcontacted_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mostcontacted_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_mostcontacted_regardingObjectId` | [account](account.md) | `msdyn_account_regardingobjectid` | `msdyn_account_regardingObjectId` |
| `msdyn_contact_msdyn_mostcontacted_regardingObjectId` | [contact](contact.md) | `msdyn_contact_regardingobjectid` | `msdyn_contact_regardingObjectId` |
| `msdyn_lead_msdyn_mostcontacted_regardingObjectId` | [lead](lead.md) | `msdyn_lead_regardingobjectid` | `msdyn_lead_regardingObjectId` |
| `msdyn_opportunity_msdyn_mostcontacted_regardingObjectId` | [opportunity](opportunity.md) | `msdyn_opportunity_regardingobjectid` | `msdyn_opportunity_regardingObjectId` |
| `organization_msdyn_mostcontacted` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mostcontacted_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontacted_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontacted_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontacted_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_mostcontacted_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontacted_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_mostcontacted.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_mostcontacted.md) on 2026-05-06.