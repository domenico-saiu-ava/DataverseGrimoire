---
logical: "msdyn_mostcontactedby"
display: "Contattato principalmente da"
entitySetName: "msdyn_mostcontactedbies"
primaryId: "msdyn_mostcontactedbyid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contattato principalmente da

Contattato principalmente da

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_mostcontactedby` |
| Display name | Contattato principalmente da |
| Display (plural) | Contattato principalmente da |
| Schema name | `msdyn_mostcontactedby` |
| Entity set (Web API) | `msdyn_mostcontactedbies` |
| Primary id attribute | `msdyn_mostcontactedbyid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_mostcontactedbies?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
POST /api/data/v9.2/msdyn_mostcontactedbies
PATCH /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
DELETE /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
```

## Attributes

Writable: **25** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_account_regardingobjectid`, `msdyn_computationaccuracy`, `msdyn_contact_regardingobjectid`, `msdyn_entityid`, `msdyn_entityimage_url`, `msdyn_entityname`, `msdyn_kpidatajson`, `msdyn_lastcontactedon`, `msdyn_lead_regardingobjectid`, `msdyn_mostcontactedbyid`, `msdyn_name`, `msdyn_numberofemails`, `msdyn_numberofinmails`, `msdyn_numberofmeetings`, `msdyn_numberofphonecalls`, `msdyn_opportunity_regardingobjectid`, `msdyn_primaryname`, `msdyn_regardingentityid`, `msdyn_regardingentityname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_mostcontactedby_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mostcontactedby_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mostcontactedby_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mostcontactedby_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_mostcontactedby` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_account_msdyn_mostcontactedby_regardingObjectId` | [account](account.md) | `msdyn_account_regardingobjectid` | `msdyn_account_regardingObjectId` |
| `msdyn_contact_msdyn_mostcontactedby_regardingObjectId` | [contact](contact.md) | `msdyn_contact_regardingobjectid` | `msdyn_contact_regardingObjectId` |
| `msdyn_lead_msdyn_mostcontactedby_regardingObjectId` | [lead](lead.md) | `msdyn_lead_regardingobjectid` | `msdyn_lead_regardingObjectId` |
| `msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId` | [opportunity](opportunity.md) | `msdyn_opportunity_regardingobjectid` | `msdyn_opportunity_regardingObjectId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mostcontactedby_SyncErrors` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_AsyncOperations` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_MailboxTrackingFolders` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_UserEntityInstanceDatas` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `objectid` | `objectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_ProcessSession` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_BulkDeleteFailures` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontactedby` |
| `msdyn_mostcontactedby_PrincipalObjectAttributeAccesses` | [msdyn_mostcontactedby](msdyn_mostcontactedby.md) | `objectid` | `objectid_msdyn_mostcontactedby` |


## Source

Generated from [msdyn_mostcontactedby (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_mostcontactedby')) on 2026-05-07.